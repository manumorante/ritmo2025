import { ArrowUpCircleIcon } from "@heroicons/react/24/solid"
export default function DoorTag({ title }: { title: string }) {
  return (
    <div className="text-sm md:text-lg rounded-full bg-white border border-emerald-800/40 inline-flex gap-1 items-center  pr-4 pl-1">
      <ArrowUpCircleIcon className="w-6 h-6 inline-block text-emerald-600" />
      <span className="text-emerald-900 whitespace-nowrap">{title}</span>
    </div>
  )
}
