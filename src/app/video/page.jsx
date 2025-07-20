// // app/page.tsx or pages/index.tsx
// import React from "react";

// const Home = () => {
//     return (
//         <main className="flex flex-col items-center justify-center min-h-screen">
//             {/* Fullscreen Video Section */}
//             <section className="w-full h-screen">
//                 <iframe
//                     src="https://player.vimeo.com/video/1101594366?autoplay=1&muted=1&loop=1&background=1"
//                     allow="autoplay; fullscreen"
//                     allowFullScreen
//                     className="object-cover w-full h-full"
//                 />
//             </section>


//             {/* 3x2 Video Grid Section */}
//             <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 w-full">
//                 {[
//                     "1101594366",
//                     "1101594366",
//                     "1101594366",
//                     "1101594366",
//                     "1101594366",
//                     "1101594366",
//                 ].map((id, index) => (
//                     <div
//                         key={index}
//                         className="aspect-video w-full overflow-hidden rounded-xl shadow-lg"
//                     >
//                         <iframe
//                             src={`https://player.vimeo.com/video/${id}?autoplay=6&muted=6&loop=6`}
//                             allow="autoplay; fullscreen"
//                             allowFullScreen
//                             className="w-full h-full"
//                         />
//                     </div>
//                 ))}
//             </section>
//         </main>
//     );
// };

// export default Home;


// app/page.tsx or pages/index.tsx
import React from "react";

const Home = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            {/* Fullscreen Video Section */}
            <section className="w-full h-screen">
                <iframe
                    src="https://player.vimeo.com/video/1101594366?autoplay=1&muted=1&loop=1&background=1"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="object-cover w-full h-full"
                />
            </section>

            {/* 3x2 Video Grid Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 w-full">
                {[
                    "1101594366",
                    "1101594366",
                    "1101594366",
                    "1101594366",
                    "1101594366",
                    "1101594366",
                ].map((id, index) => (
                    <div
                        key={index}
                        className="aspect-video w-full overflow-hidden rounded-xl shadow-lg"
                    >
                        <iframe
                            src={`https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1&background=1`}
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Home;
