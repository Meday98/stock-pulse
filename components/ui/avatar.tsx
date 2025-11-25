"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Renders an avatar container with default sizing, layout, and rounded styling.
 *
 * @param className - Additional CSS classes to merge with the component's default styles.
 * @param props - Remaining props are forwarded to the underlying avatar root element.
 * @returns The avatar root element with composed class names and forwarded props.
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a Radix Avatar Image element with default square aspect and full sizing.
 *
 * Accepts additional CSS classes and forwards all other props to the underlying Radix `Avatar.Image`.
 *
 * @param className - Additional CSS classes appended to the default `"aspect-square size-full"` classes
 * @returns A React element for the avatar image using Radix `Avatar.Image`
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders an avatar fallback element used when the avatar image is unavailable.
 *
 * @param className - Additional CSS classes to merge with the component's default styling
 * @returns An Avatar Fallback element with default background, centering, rounded shape, and the provided classes
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }