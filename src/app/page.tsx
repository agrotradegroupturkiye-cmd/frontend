export default function Page() {
  return (
    <main className="w-full max-w-6xl mx-auto flex flex-col gap-6 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Добро пожаловать в CleanGo Production!
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Услуга 1</h2>
          <p className="text-gray-700">Подробное описание услуги с Tailwind-стилями.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Услуга 2</h2>
          <p className="text-gray-700">Детали и преимущества этой услуги.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Услуга 3</h2>
          <p className="text-gray-700">Еще одна услуга с приятной анимацией hover.</p>
        </div>
      </section>
    </main>
  );
}
