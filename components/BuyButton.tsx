"use client";

import { useEffect, useRef, useState } from "react";
import type { Paddle } from "@paddle/paddle-js";
import { initializePaddle } from "@paddle/paddle-js";
import { PADDLE_CLIENT_TOKEN, PADDLE_ENVIRONMENT } from "@/lib/paddle";
import { SALES_ENABLED, LAUNCH_DISCOUNT_ID, isLaunchDiscountActive } from "@/lib/products";

export default function BuyButton({
  priceId,
  className,
}: {
  priceId: string;
  className?: string;
}) {
  const paddleRef = useRef<Paddle | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!SALES_ENABLED) return;
    let cancelled = false;
    initializePaddle({
      environment: PADDLE_ENVIRONMENT,
      token: PADDLE_CLIENT_TOKEN,
    }).then((paddle) => {
      if (cancelled || !paddle) return;
      paddleRef.current = paddle;
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!SALES_ENABLED) {
    return (
      <button type="button" className={className} disabled>
        Próximamente
      </button>
    );
  }

  return (
    <button
      type="button"
      className={className}
      disabled={!ready}
      onClick={() => {
        paddleRef.current?.Checkout.open({
          items: [{ priceId, quantity: 1 }],
          ...(isLaunchDiscountActive() ? { discountId: LAUNCH_DISCOUNT_ID } : {}),
        });
      }}
    >
      {ready ? "Comprar ahora" : "Cargando…"}
    </button>
  );
}
