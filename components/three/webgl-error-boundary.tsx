"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Wraps the R3F `<Canvas>` so that any runtime error during WebGL context
 * creation, shader compilation, or per-frame logic falls back to a static
 * poster instead of crashing the hero subtree.
 *
 * The blade is decorative — failure must NEVER affect copy / CTAs.
 * Real-world cases this catches: GPU blocklisted (older Intel HD on shop
 * computers), hardware-accel disabled in Chrome flags, WebGL disabled by
 * group policy, three.js shader compile errors, NaN math in useFrame.
 */
export class WebGLErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    if (typeof window !== "undefined") {
      console.info(
        "[HeroCanvas] WebGL/R3F threw, falling back to poster:",
        error.message,
      );
    }
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}
