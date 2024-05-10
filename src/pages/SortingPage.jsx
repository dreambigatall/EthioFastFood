import { useSearchParams } from "react-router-dom";

function sortList(item, sortMethod){
    switch(sortMethod){
        case "highToLow":
            return item.sort((a,b) => a.price - b.price);
        case "lowToHigh":
            return item.sort((a,b) => b.price - a.price);
        default:
            return item;
    }
}

export default function SortOption({data, handleSortChange}){
        
      const [serchParams, setSerchParams] = useSearchParams();
      const sort = serchParams.get('sort');

      const sortedItems= sortList(data, sort);

      return (
        <div>
            <select value={sort} onChange={handleSortChange}>
                <option value="">Sort By</option>
                <option value="highToLow">price (9 to 0)</option>
                <option value="lowToHigh">price (0 to 9)</option>
            </select>
        </div>
      )

}