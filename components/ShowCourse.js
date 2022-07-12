import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from '../styles/ShowCourse.module.scss';

export default function ShowCourse() {
  
  const [showChild, setShowChild] = useState(false);
  const {CORS} = useSelector(state=>state);

  useEffect(() => {
    setShowChild(true);
  }, []);

  
  if (!showChild) return null;

    return (
      <div>
        {
          CORS.map(el =>{
            return (
              <article className={styles.course}>
                <div>코스사진</div>
                <div>
                  <div>
                    <span>{el.title}</span>
                    <span>heart</span>
                  </div>
                  <div>{el.content}</div>
                  <div>{el.hashTag.map((el)=> <span>{`#${el} `}</span>)}</div>
                  <div>
                    <span>{el.select}</span>
                    <span>{el.viewCnt}</span>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    )
}
