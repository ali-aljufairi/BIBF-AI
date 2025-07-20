export default function GeometricShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-xl animate-pulse" />
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-lg animate-bounce"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-sky-500/5 to-blue-500/5 rounded-full blur-xl animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "2s" }}
      />

      {/* Floating geometric shapes */}
      <div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-indigo-400/20 rotate-45 animate-spin"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-ping"
        style={{ animationDuration: "3s" }}
      />
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-pink-400/15 rotate-12 animate-pulse" />
      <div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-emerald-400/20 rounded-full animate-bounce"
        style={{ animationDuration: "2s" }}
      />

      {/* Subtle lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
    </div>
  )
}
