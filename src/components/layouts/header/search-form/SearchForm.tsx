import { IconBox } from "@/components/common";

export function SearchForm() {
    // TODO should implement this search form
  return (
    <form name="search-form" action="#" method="post" className="flex items-center">
        <input type="text" name="search_text" placeholder="Search for items" className="text-xsmall text-gray-600 border-gray-300 w-full py-[15px] focus:outline-none" />
        <button type="submit">
            <IconBox icon={"icon-search"}/>
        </button>
    </form>
  )
}
