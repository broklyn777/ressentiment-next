const items = [
  {
    title: "Sårad makt",
    text: "Ressentiment börjar där en människa inte kan handla ut sin vrede och i stället bevarar den som minne, tolkning och moralisk dom."
  },
  {
    title: "Omvärdering",
    text: "Det starka kallas ont, det svaga kallas gott. Nietzsche beskriver detta som en moralisk invertering snarare än enkel avund."
  },
  {
    title: "Skapande fara",
    text: "Begreppet är inte bara psykologi. Det är också en fråga om kultur: vilka värden skapar vi när reaktivitet får styra?"
  }
];

export function ConceptPanel() {
  return (
    <section className="bg-ink py-20 text-chalk">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-chalk/55">Karnan</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Ressentiment är en känsla som börjar tänka.
          </h2>
        </div>
        <div className="grid gap-4">
          {items.map((item) => (
            <div key={item.title} className="border-t border-chalk/20 pt-5">
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-2 max-w-2xl leading-7 text-chalk/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
