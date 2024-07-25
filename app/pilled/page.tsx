import AddOverlay from '@/components/AddOverlay'

export default function CheersPilled() {
  return (
    <main className="max-w-[500px] mx-auto md:p-0 px-4 mt-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Bratt Pilled 🟩</h1>
        <p className="text-sm text-gray-500">Be Bratt</p>
      </div>
      <AddOverlay />
    </main>
  )
}