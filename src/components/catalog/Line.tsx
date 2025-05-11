export default function Line({ width, color }: { width: string, color: string }) {
    return (
        <div className={`w-[${width}] h-0.5 mt-3`} style={{ backgroundColor: color }} />
    );
}

// type LineProps = {
//     width: string;
//     color: 'pink' | 'blue' | 'custom'; // Misol uchun cheklangan ranglar
//   };
  
//   export default function Line({ width, color }: LineProps) {
//     const colorClasses = {
//       pink: 'bg-[#D3176D]',
//       blue: 'bg-blue-500',
//       custom: 'bg-[#123456]', // Boshqa custom rang
//     };
  
//     return (
//       <div className={`${width} h-0.5 ${colorClasses[color]}`} />
//     );
//   }