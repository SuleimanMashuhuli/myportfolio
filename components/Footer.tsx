export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-6 md:px-8 border-t bg-white text-sm mt-12 sm:mt-16 text-center sm:text-left">
      <div className="mb-2 sm:mb-0">©{year} Suleiman Ali. All rights reserved.</div>
    </footer>
  );
} 