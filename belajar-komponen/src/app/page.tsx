import MyGallery from "@/components/mygallery";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Brian Ilmuwan yang luar biasa</h1>
      <MyGallery />
    </section>
  );
}

// export default function Home() {
//   return (
//     <section>
//       <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
//       <hr />
//       <Gallery />
//       <hr />
//       <TodoList />
//     </section>
//   );
// }

// export default function Bio() {
//   return (
//     <div className="intro">
//       <h1>Selamat datang di website Brian!</h1>
//       <p className="summary">
//         Anda dapat membaca uneg-uneg saya di sini.
//         <br/><br/>
//         <b>Juga ada <i>foto</i> ilmuan!</b>
//         <Gallery />
//       </p>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Brian ilmuan yang luar biasa&nbsp;
//         </p> 
//         <Gallery />
//       </div>
//     </main>
//   );
// }
