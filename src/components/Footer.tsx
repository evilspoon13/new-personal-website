export default function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-4xl mx-auto border-t border-border pt-6">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
