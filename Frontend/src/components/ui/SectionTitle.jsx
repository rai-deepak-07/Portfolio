export default function SectionTitle({title, subtitle,}) {
  return (
    <div className="mb-14 text-center">

      <p className="text-blue-600 font-semibold uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="mt-3">
        {title}
      </h2>

    </div>
  );
}