type Params = {
  slug: string;
};

export default function MealsPage({ params }: { params: Params }) {
  return (
    <section>
      <h1>{params.slug}</h1>
    </section>
  );
}
