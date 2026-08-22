export default function Loading() {
  return (
    <div className="container-page flex min-h-[50vh] items-center justify-center py-24">
      <div className="size-8 animate-spin rounded-full border-2 border-border border-t-accent" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}