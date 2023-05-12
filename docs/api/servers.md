---
title: Сервера
description: Документация для взаимодействия с серверами
---

# Методы

## Информация о боте
Данный метод информацию об указанном сервере

### Параметры запроса
| Тип | Путь      | Параметры 		|	Результат	|
|-----|-----------|---------------|-----------|
| GET | /bots/:id | :id - ID бота	| [ResourceServer](#resourceserver)


# Типы данных

## ResourceServer

|	Поле	|	Тип			|	Описание	|
|-------|---------|-----------|
|	id		|	строка	|	ID бота	|
|	name	|	строка	| Имя бота	|
|	shortDescription	|	строка	| Короткое описание	|
|	description	|	строка	| Описание бота	|
|	avatar?	|	строка	| Аватар бота |
|	shortLink?	| строка	| Короткая ссылка на бота	|
|	inviteLink	|	строка	| Ссылка-приглашение	|
|	premiumActive	|	true/false	|	Статус премиума	|
|	premiumSplashURL?	|	строка	|	Ссылка на сплеш	|	
|	premiumAutoFetch?	|	true/false	| Автообовление информации	|
|	standardBannerID	|	число	| ID стандартного баннера 	|
|	premiumBannerURL?	|	строка	| URL Премиум баннера бота	|
|	owner	|	строка	| Владелец бота	|
|	status	|	[ResourceStatus](#resourcestatus) | Статус бота |
|	ratings	|	массив [ResourceRating](#resourcerating)	| Рейтинг бота |
|	prefix	|	строка	| Префикс бота	|
|	discriminator	|	строка	| Дискриминатор бота	|
|	createdDate	|	строка	| Дата создания	|
|	supportServerInviteLink?	|	строка | Ссылка на саппорт сервер	|
|	library?	|	[Libary](#libary)	|	Библиотека бота	|
|	guilds?	|	число	| Количество серверов	|
|	shards?	|	число	| Количество шардов	|
|	members?	| число	|	Количество участников	|
|	website?	|	строка	|	Ссылка на сайт	|
|	tags	|	массив [Tags](#tags)	|	Теги бота	|
|	developers	|	массив [PartialUser](#partialuser)	|	Разработчики бота	|
|	upCount	|	число	| Количество апов	|
|	ups?	|	массив [ResourceUp](#resourceup)	|	Апы бота	|

---
## ResourceStatus
Статус сервера на мониторинге

| Код	|	Имя	|	Описание	|
|-----|-----|-----------|
|	0	|	Hidden	|	Бот скрыт	|
|	1	|	Public	|	Бот на мониторинге	|
|	2	|	Banned	| Бот забаннен	|
|	3	|	Pending	|	Бот ожидает проверки	|


## ResourceRating
Рейтинг бота

| Поле | Тип	| Описание	|
|------|------|-----------|
| count | число	|	Количество оценок |
| raiting	|	число | Рейтинг от 1 до 5	|

---

## Tags
Теги бота

| Код | Имя |
|-----|-----|
| 130 |Общение|
| 131 |Фан|
| 132 |Игры|
| 133 |Кино|
| 134 |Аниме|
| 135 |Искусство|
| 136 |Кодинг|
| 137 |Музыка|
| 138 |18+|
| 139 |Role-Play|
| 140 |Юмор|
| 160 |Genshin|
| 161 |Minecraft|
| 162 |GTA|
| 163 |CS|
| 164 |Dota|
| 165 |Among Us|
| 166 |Fortnite|
| 167 |Brawl Stars|
---

## ResourceUp
Информация о апе.

| Поле	| Тип	|	Описание	|
|-------|-----|-----------|
|	id	|	строка	|	ID апа
|	expires	|	строка	|	Дата истечения	|


## PartialUser
Тип PartialUser использует свойства из [UserProfiIe](/api/profiles#userprofile), но не имеет в себе свойств `badges` `bots` `servers`