import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-2xl overflow-hidden animate-fade-in">
      <div
        className="rounded-2xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center shadow-2xl"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 relative z-10">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white drop-shadow-2xl animate-slide-up">
            {data.label}
          </div>
          <div className="w-24 h-1 bg-white/80 rounded-full animate-scale-in" />
        </div>
      </div>
    </div>
  );
};

export default Billboard;