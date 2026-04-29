"use client"

import { Button } from "@/components/ui/button"
import type { ComponentProps } from "react"

const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "sparkrise/revenue-leak-audit"

export function CalButton({ children, ...props }: ComponentProps<typeof Button>) {
  return (
    <a href={`https://cal.com/${calLink}`} target="_blank" rel="noopener noreferrer">
      <Button {...props}>{children}</Button>
    </a>
  )
}
