export default function formatId(id: number) {
  return '#' + id.toString().padStart(3, '0')
}
