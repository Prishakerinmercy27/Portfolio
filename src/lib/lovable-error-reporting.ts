// Lovable error reporting removed from UI-visible code.
// Keep a noop export so existing imports do not break the build.
export function reportLovableError(_error: unknown, _context: Record<string, unknown> = {}) {
  // intentionally noop
}
