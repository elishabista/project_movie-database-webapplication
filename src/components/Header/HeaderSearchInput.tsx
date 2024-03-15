/* eslint-disable no-nested-ternary */
import { forwardRef, Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useGetSearchMoviesByValue } from "./header.query";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { imageUrlSmall } from "../../constatnts/constants";
import useDebounce from "../../hooks/useDebounce";
import Spinner from "../Spinner";


interface Props {
  setIsSearchClicked?: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderSearchInput = forwardRef<HTMLInputElement, Props>(
  ({ setIsSearchClicked }, ref) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const debouncedValue = useDebounce(searchValue);
    const { data: searchData, isLoading } =
      useGetSearchMoviesByValue(debouncedValue);
    const navigate = useNavigate();
    console.log(searchData, "searchData");

    return (
      <div className="w-full">
        <Combobox>
          <div className="relative">
            <div className="flex items-center relative w-full cursor-default overflow-hidden rounded-lg gap-2 text-left  focus:ring-0 sm:text-sm">
              <Combobox.Button className="relative flex w-full items-center rounded-3xl bg-surface px-4 py-3 text-onSurface focus:outline-none focus:ring-0 sm:w-[334px] md:w-[280px]">
                <AiOutlineSearch className="mr-3 text-base text-onSurfaceVariant" />
                <Combobox.Input
                  className="grow border-none bg-inherit text-lg leading-5 text-onSurfaceVariant focus:outline-none"
                  ref={ref}
                  onChange={(event) => {
                    setSearchValue(event.target.value);
                  }}
                  placeholder="Search"
                  name={"dashboardSearchInput"}
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              afterLeave={() => {
                setSearchValue("");
                setIsSearchClicked?.(false);
              }}
            >
              <Combobox.Options className="text-md absolute top-16 z-50 mt-1 max-h-[500px] w-full overflow-auto rounded-md bg-surface p-4 py-3 text-onSurface shadow-card-lg focus:outline-none sm:w-[340px] xxl:w-[544px]">
                {debouncedValue ? (
                  isLoading ? (
                    <Spinner />
                  ) : searchData?.results.length ? (
                    <div className="flex flex-col gap-1">
                      {searchData?.results.map((item) => {
                         console.log(item,'item123')
                        return (
                          <Combobox.Option
                            key={item.id}
                            className="relative cursor-pointer select-none p-1 hover:bg-primaryContainer"
                            value={item}
                            onClick={() => {
                              navigate(`/movie/${item?.id}`);
                            }}
                          >
                            {() => (
                              <div className="flex items-center gap-4 px-4 py-2">
                                <img
                                  alt="service_icon"
                                  src={`${imageUrlSmall}${item?.poster_path}`}
                                  className="h-16 w-16"
                                />
                                <div className=" flex-column">
                                <h6 className="text-onSurface">{item.title}</h6>
                                <p className="mt-2 text-white text-xs">
                                  Release Date: {item?.release_date} 
                                </p>
                                </div>
                                
                              </div>
                            )}
                          </Combobox.Option>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="my-10 text-center">
                      <h6 className="text-xl">No Result Found</h6>
                      <h6>Please try again with another keyword</h6>
                    </div>
                  )
                ) : (
                  <div className="my-10 text-center">
                    <h6 className="text-xl">Search Movies By Name</h6>
                    <h6>Search Movies with Name</h6>
                  </div>
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    );
  }
);

HeaderSearchInput.displayName = "HeaderSearchInput";

export default HeaderSearchInput;
