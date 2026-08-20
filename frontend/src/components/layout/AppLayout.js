// ======================================================
// PBODY FULLSTACK ACADEMY
// LEGACY LAYOUT COMPATIBILITY WRAPPER
// FULL REPLACEMENT
// ======================================================
//
// StudentLayout and PublicLayout are now controlled
// directly by the main application router.
//
// Older pages/components may still import AppLayout.
// This compatibility wrapper prevents duplicate
// sidebars, duplicate navbars and broken Outlet usage.
//

export default function AppLayout({ children }) {

  return children;

}