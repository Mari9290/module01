'use strict';

{
    const rain = Math.round(Math.random());

    if (rain === 1) {
        console.log('Пошёл дождь. Возьмите зонт!');
    }

    if (rain === 0) {
        console.log('Дождя нет!')
    }
}

{
    const mathematics = prompt('Введите кол-во баллов по математике:');
    const russianLanguage = prompt('Введите кол-во баллов по русскому языку:');
    const informatics = prompt('Введите кол-во баллов по информатике:');

    if (mathematics + russianLanguage + informatics >= 265) {
        alert('Поздравляю, вы поступили на бюджет!');
    }
}

{
    const cash = prompt('Сколько денег вы хотите снять?');

    if (cash >= 100 && cash % 100 === 0) {
        console.log('Операция одобрена')
    } else {
        console.log('Операция отклонена')
    }
}


