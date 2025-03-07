# NpmTutorial

## Ініціалізація проекту

```
1. npm init — Запускає майстер створення package.json;
2. npm init -y — Створює package.json з налаштуваннями за замовчуванням.
```

## Встановлення пакетів

```
1. npm install package-name — Встановлює пакет локально;
2. npm i package-name — Скорочена версія команди;
3. npm install -g package-name — Встановлює пакет глобально;
4. npm install package-name --save-dev — Встановлює пакет як dev-залежність.
```

## Видалення пакетів

```
1. npm uninstall package-name — Видаляє пакет.
```

## Оновлення пакетів

```
1. npm update — Оновлює всі пакети до minor/patch версій;
2. npm update package-name — Оновлює конкретний пакет;
3. npm outdated — Показує застарілі пакети.
```

## Очищення кешу

```
1. npm cache clean --force — Очищає кеш npm.
```

## Запуск скриптів

```
1. npm start — Запускає скрипт start з package.json;
2. npm run script-name — Запускає користувацький скрипт з package.json.
```

## Управління залежностями

```
1. npm list — Показує встановлені пакети;
2. npm list -g --depth=0 — Показує глобально встановлені пакети.
```

## Повторна установка залежностей

```
1. rm -rf node_modules package-lock.json && npm install — Видаляє папку node_modules і package-lock.json, а потім перевстановлює всі залежності.
```
