import Link from "next/link";

export default function MealsPage(){
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/banana">Banana</Link>
      </p>
      <p>
        <Link href="/meals/coconut">Coconut</Link>
      </p>
    </main>
  )
}