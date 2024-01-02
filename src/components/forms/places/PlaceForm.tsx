import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";

export type PlaceFormData = {
  province: string;
  city: string;
  name: string;
  description: string;
  type: string;
  starRating: number;
  facilities: string[];
  imageUrls: FileList;
  price: number;
};

const PlaceForm = () => {
  const formMethods = useForm<PlaceFormData>();

  return (
    <div>
      <div className="flex flex-col">
        <div className="mb-8">
          <h1 className="font-bold leading-wide font-sans text-2xl ">
            Add a place
          </h1>
          <p className="text-sm text-gray-400 leading-none">
            Create new place form
          </p>
        </div>
        <FormProvider {...formMethods}>
          <form>
            <DetailsSection />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default PlaceForm;
