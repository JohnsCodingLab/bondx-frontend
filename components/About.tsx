import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="p-5 mt-24 mb-10 mx-[80px] max-lg:mx-5 text-white">
        <h1 className="font-main text-2xl text-center font-semibold mb-10">
          How it Works
        </h1>
        <p className="text-center max-sm:text-justify leading-7">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius
        </p>
        <Image
          src="/coin4.png"
          alt="coin"
          width={400}
          height={400}
          className="md:hidden"
        />
      </div>

      <div className="mx-[100px] max-sm:mx-5 grid lg:grid-cols-3 gap-5 mb-20">
        <div className="p-5 border-bcolor bg-secondary rounded-lg">
          <h1 className="text-white mb-2 font-semibold">
            pick a coin that you like
          </h1>
          <p className="text-grey text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
        </div>

        <div className="p-5 border-bcolor bg-secondary rounded-lg">
          <h1 className="text-white mb-2 font-semibold">
            buy the coin on the bonding curve
          </h1>
          <p className="text-grey text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
        </div>

        <div className="p-5 border-bcolor bg-secondary rounded-lg">
          <h1 className="text-white mb-2 font-semibold">
            sell at any time to lock in your profits or losses
          </h1>
          <p className="text-grey text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
