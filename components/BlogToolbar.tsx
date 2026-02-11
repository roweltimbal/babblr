import { InputInline } from "./SearchBar"
import { CategoryFilter } from "./BlogFilterPopover"

export default function BlogToolBar () {
    return(
        <div className="flex bg-background w-full h-12 mb-4.5 mt-4.5 gap-3 items-center py-4 px-2">
            <div>
                <InputInline/>
            </div>
            <div>
                <CategoryFilter/>
            </div>
        </div>
    )
}