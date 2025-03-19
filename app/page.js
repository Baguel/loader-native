import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-center flex items-center justify-center h-screen">
      <div
        class="inline-block h-8 w-8 text-black animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
      </div>
    </div>
  );
}
