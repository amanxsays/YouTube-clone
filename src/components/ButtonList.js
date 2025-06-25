import { useDispatch} from 'react-redux';
import { tagChange } from '../utils/appSlice';
import { Link } from 'react-router';

const ButtonList = () => {
  const dispatch=useDispatch();
  const tagHandler=(tag)=>{
    dispatch(tagChange(tag));
  }
  const tagsList=['Top In India','Panchayat S04','Latest Songs','Maadhur Virli','Purav Jha','NIT SILCHAR','NTA','GTA6','STtand Up','Plain Crash','News','Football','Fun','Ind Vs Pak'];
  return (
    <div className='flex flex-wrap gap-3 mx-3 mb-3'>
      {tagsList.map((tag)=><button className='bg-[#464646] text-white text-sm px-2 py-1 rounded-lg hover:bg-gray-500 focus:bg-gray-400' key={tag} onClick={()=>tagHandler(tag)}>{tag}</button>)}
    </div>
  )
}

export default ButtonList;