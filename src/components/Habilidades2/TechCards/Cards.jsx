import styles from "./Cards.module.scss";
import Tec from "../skills";

export default function TechCards({ type }) {
    const filteredTec = Tec.filter(item => item.category === type);

    return (
        <div id="cards" className={styles.CardContainer}>
            {filteredTec.map((item, index) => (
                <div id="cards" className={styles.CardContainer_card} style={{ borderColor: item.color }} key={index}>
                    <div className={styles.CardContainer_card_Icon} style={{ color: item.color }}>
                        {item.Icon}
                    </div>

                    {item.Know >= 70 ?

                        <p className={styles.CardContainer_card_text}>
                            {item.Title} - Avançado
                        </p>
                        :
                        <p className={styles.CardContainer_card_text}>
                            {item.Title} - Intermediario
                        </p>
                    }
                </div>
            ))}
        </div>
    );
}
