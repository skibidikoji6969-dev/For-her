export default function BookPage({ number, total, children }) {
  return (
    <section className="page" aria-label={`page ${number} of ${total}`}>
      <div className="page-body">{children}</div>
      <div className="folio">
        page {number} of {total}
      </div>
    </section>
  );
}
