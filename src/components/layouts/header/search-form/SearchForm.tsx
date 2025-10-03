import { IconBox } from "@/components/common";

interface Props{
  inputClassName? : string;
}

export function SearchForm({inputClassName} : Props) {
    // TODO should implement this search form
  return (
    <form name="search-form" action="#" method="post" className="flex items-center">
        <input type="text" name="search_text" placeholder="Search for items" className={`text-xsmall text-gray-600 border-gray-300 w-full focus:outline-none ${{inputClassName}}`} />
        <button type="submit">
            <IconBox icon={"icon-search"} iconClassname={"ml-1"}/>
        </button>
    </form>
  )
}
