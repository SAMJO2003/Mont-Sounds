import { getProduct, getProductByPriceId } from "@/lib/products";
import { compositions } from "@/lib/compositions";

// Everything a completed Paddle transaction can deliver: a library, or one
// format of a sheet music piece. `key` is what the download token stores —
// library keys are the plain product slug (so tokens issued before sheet
// music existed keep working); sheet music keys are "sheet:<slug>:<option>".
export type Deliverable = {
  key: string;
  kind: "library" | "sheet-music";
  name: string;
  driveFileUrl: string;
  license?: string;
};

function sheetDeliverables(): (Deliverable & { paddlePriceId: string })[] {
  return compositions.flatMap((piece) =>
    piece.options.map((option) => ({
      key: `sheet:${piece.slug}:${option.id}`,
      kind: "sheet-music" as const,
      name: `${piece.title} — ${option.label}`,
      driveFileUrl: option.driveFileUrl,
      license: piece.license,
      paddlePriceId: option.paddlePriceId,
    }))
  );
}

export function getDeliverableByPriceId(priceId: string): Deliverable | undefined {
  const product = getProductByPriceId(priceId);
  if (product) {
    return { key: product.slug, kind: "library", name: product.name, driveFileUrl: product.driveFileUrl };
  }
  const sheet = sheetDeliverables().find((d) => d.paddlePriceId && d.paddlePriceId === priceId);
  if (!sheet) return undefined;
  const { paddlePriceId: _unused, ...deliverable } = sheet;
  return deliverable;
}

export function getDeliverable(key: string): Deliverable | undefined {
  const product = getProduct(key);
  if (product) {
    return { key: product.slug, kind: "library", name: product.name, driveFileUrl: product.driveFileUrl };
  }
  const sheet = sheetDeliverables().find((d) => d.key === key);
  if (!sheet) return undefined;
  const { paddlePriceId: _unused, ...deliverable } = sheet;
  return deliverable;
}
