export default function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-primary-700">{title}</h1>
      {subtitle && <p className="mt-3 text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
