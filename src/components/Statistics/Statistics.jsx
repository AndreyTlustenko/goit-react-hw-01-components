import style from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';



export const Statistics =  ({ title, stats }) => { 
    return (
        <section className={style.statistics}>
    {title && <h2 className={style.title}>{title}</h2>}
    <ul key={stats.id} className={style.statList}>
        {stats.map(({ id, label, percentage }) => {
            return(
    <li key={id} id={id} className={style.item}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
        </li>
         )
        })}
    </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired,
        })
    )
    

}