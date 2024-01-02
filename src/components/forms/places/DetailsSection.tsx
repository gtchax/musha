import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlaceFormData } from "./PlaceForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PlaceFormData>();
  return (
    <>
      <div className="flex flex-col mb-4">
        <Label htmlFor="name" className="pl-1">Name</Label>
        <Input
          type="text"
          placeholder="Name"
          className="ring-black mt-3"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-red-500 pt-1 text-sm">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="flex gap-4 mb-4 w-full">
        <div className="flex-1">
          <Label htmlFor="city" className="pl-1">City</Label>
          <Input
            type="text"
            placeholder="City"
            className="ring-black flex-1 mt-3"
            {...register("city", { required: "This field is required" })}
          />
          {errors.city && (
            <span className="text-red-500 pt-1 text-sm">
              {errors.city.message}
            </span>
          )}
        </div>
        <div className="flex-1">
          <Label htmlFor="province" className="pl-1">Province</Label>
          <Input
            type="text"
            placeholder="Province"
            className="ring-black mt-3"
            {...register("province", { required: "This field is required" })}
          />
          {errors.province && (
            <span className="text-red-500 pt-1 text-sm">
              {errors.province.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
