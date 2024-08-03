import styles from "../public/home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Esto es el layout para toda la app</h1>
      <div className={styles.container}>
        <h2 className={styles.title}>Este es un título (CSS Módulo)</h2>
        <p className={styles.subtitle}>Este es un subtítulo (CSS Módulo)</p>
        <p>Este es un contenido de ejemplo en el componente (CSS Módulo).</p>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 shadow-md mt-4">
        <h2 className="text-2xl text-blue-600 mb-4">Este es un título (Tailwind)</h2>
        <p className="text-base text-green-600 mb-2">Este es un subtítulo (Tailwind)</p>
        <p className="text-base text-red-600">
          Este es un contenido de ejemplo en el componente (Tailwind).
        </p>
      </div>
    </div>
  );
}
