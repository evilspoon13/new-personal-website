export default function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-4xl mx-auto border-t border-border pt-6 flex items-center justify-between">
        <p className="text-xs text-faint">
          &copy; {new Date().getFullYear()} Cameron Stone
        </p>
        <a
          href="#about"
          className="text-xs text-faint hover:text-zinc-900 transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
