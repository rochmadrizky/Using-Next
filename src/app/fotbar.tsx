export default function Fotbar() {
    const Tahun = new Date().getFullYear();
    return (
        <div className="p-3 text-center text-base mx-auto font-seconds bottom-0 bg-gray-300">
            Copyright &copy;{ Tahun } All rights reserved.
        </div>
    )
}