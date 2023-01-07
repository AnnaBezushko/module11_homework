// 4.2) Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.

function getPercent(percent, number) {
    if (percent > 100 || percent < 0) {
        result = 'данные неверны';
    } else { result = (percent * number/100)}
    return result;
};
module.exports = getPercent;
