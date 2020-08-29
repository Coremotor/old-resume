import React, {useState} from "react";
import styles from './WorkExperience.module.css';
import {IconUrlBlock} from "../CoursesList/IconUrlBlock/IconUrlBlock";

const WorkExperience = () => {

    const [workExperienceShow, setWorkExperienceShow] = useState({
        workExperienceShow: false,
    })

    return (
        <section className={styles.workExperience}>
            <div className={styles.workExperienceTitleWrapper}
                 onClick={() => setWorkExperienceShow({workExperienceShow: !workExperienceShow.workExperienceShow})}
            >

                <h2 className={styles.workExperienceTitle}>Опыт работы</h2>

                <IconUrlBlock obj={workExperienceShow}/>
            </div>

            {
                workExperienceShow.workExperienceShow &&
                <ul className={styles.workExperienceList}>
                    <li className={styles.workExperienceListItem}>
                        <h3>Банк "Йошкар-Ола" (ПАО)</h3>
                        <p className={styles.workExperienceListItemText}>Должность: начальник</p>
                        <p className={styles.workExperienceListItemText}>Отдел: управление по кассовой работе</p>
                        <p className={styles.workExperienceListItemText}>Месяц начала: июнь</p>
                        <p className={styles.workExperienceListItemText}>Год начала: 2016</p>
                        <p className={styles.workExperienceListItemText}>По настоящее время.</p>
                        <p className={styles.workExperienceListItemText}>Обязанности: руководство и контроль работы управления (9 дополнительных офисов, отдел
                            кассовых операций, сектор учета и контроля - 47 сотрудников в подчинении). Кадровый побор,
                            проведение собеседований. Общение с контролирующими органами, ЦБ РФ, представителями
                            организаций проводящих проверки.</p>
                    </li>

                    <li className={styles.workExperienceListItem}>
                        <h3>Банк "Йошкар-Ола" (ПАО)</h3>
                        <p className={styles.workExperienceListItemText}>Должность: руководитель сектора</p>
                        <p className={styles.workExperienceListItemText}>Отдел: сектор розничных продуктов</p>
                        <p className={styles.workExperienceListItemText}>Месяц начала: январь</p>
                        <p className={styles.workExperienceListItemText}>Год начала: 2014</p>
                        <p className={styles.workExperienceListItemText}>Месяц окончания: июнь</p>
                        <p className={styles.workExperienceListItemText}>Год окончания: 2016</p>
                        <p className={styles.workExperienceListItemText}>Обязанности: руководство сектором кредитования физических лиц, проверка заявок по оформлению
                            кредитов, оценка финансового положения заемщиков.</p>
                    </li>

                    <li className={styles.workExperienceListItem}>
                        <h3>Банк "Йошкар-Ола" (ОАО)</h3>
                        <p className={styles.workExperienceListItemText}>Должность: начальник отдела</p>
                        <p className={styles.workExperienceListItemText}>Отдел: отдел кассовых операций</p>
                        <p className={styles.workExperienceListItemText}>Месяц начала: апрель</p>
                        <p className={styles.workExperienceListItemText}>Год начала: 2012</p>
                        <p className={styles.workExperienceListItemText}>Месяц окончания: январь</p>
                        <p className={styles.workExperienceListItemText}>Год окончания: 2014</p>
                        <p className={styles.workExperienceListItemText}>Обязанности: оперативное и административное руководство отделом, контроль работы отдела
                            (касса по обслуживанию физических лиц, вечерняя касса, касса пересчета (16 сотрудников в
                            подчинении)).</p>
                    </li>

                    <li className={styles.workExperienceListItem}>
                        <h3>Банк "Йошкар-Ола" (ОАО)</h3>
                        <p className={styles.workExperienceListItemText}>Должность: специалист</p>
                        <p className={styles.workExperienceListItemText}>Отдел: служба безопасности</p>
                        <p className={styles.workExperienceListItemText}>Месяц начала: сентябрь</p>
                        <p className={styles.workExperienceListItemText}>Год начала: 2010</p>
                        <p className={styles.workExperienceListItemText}>Месяц окончания: апрель</p>
                        <p className={styles.workExperienceListItemText}>Год окончания: 2012</p>
                        <p className={styles.workExperienceListItemText}>Обязанности: проведение мероприятий, направленных на поддержание экономической и
                            информационной безопасности Банка.</p>
                    </li>

                    <li className={styles.workExperienceListItem}>
                        <h3>Банк "Йошкар-Ола" (ОАО)</h3>
                        <p className={styles.workExperienceListItemText}>Должность: инкассатор</p>
                        <p className={styles.workExperienceListItemText}>Отдел: управление инкассации</p>
                        <p className={styles.workExperienceListItemText}>Месяц начала: ноябрь</p>
                        <p className={styles.workExperienceListItemText}>Год начала: 2009</p>
                        <p className={styles.workExperienceListItemText}>Месяц окончания: сентябрь</p>
                        <p className={styles.workExperienceListItemText}>Год окончания: 2010</p>
                        <p className={styles.workExperienceListItemText}>Обязанности: перевозка наличных денег и ценностей. Обеспечение безопасности ценностей на всем
                            маршруте следования.</p>
                    </li>

                    <li className={styles.workExperienceListItem}>
                        <h3>Служба в рядах Российской Армии</h3>
                        <p className={styles.workExperienceListItemText}>Должность: электрик-стрелок</p>
                        <p className={styles.workExperienceListItemText}>Род войск: РВСН</p>
                        <p className={styles.workExperienceListItemText}>Месяц начала: ноябрь</p>
                        <p className={styles.workExperienceListItemText}>Год начала: 2008</p>
                        <p className={styles.workExperienceListItemText}>Месяц окончания: ноябрь</p>
                        <p className={styles.workExperienceListItemText}>Год окончания: 2009</p>
                    </li>
                </ul>
            }
        </section>
    )
}

export default WorkExperience;