import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const servers = [
    {
      name: "de_dust2",
      players: "24/32",
      map: "Dust2",
      ping: 45,
      status: "online",
    },
    {
      name: "cs_office",
      players: "16/32",
      map: "Office",
      ping: 32,
      status: "online",
    },
    {
      name: "de_inferno",
      players: "28/32",
      map: "Inferno",
      ping: 58,
      status: "online",
    },
    {
      name: "de_mirage",
      players: "12/32",
      map: "Mirage",
      ping: 67,
      status: "offline",
    },
  ];

  const shopItems = [
    {
      name: "AK-47 | Redline",
      price: "₽850",
      rarity: "Коллекционное",
      image: "/img/a1947562-a0ec-4435-a3f4-817f22fbdc3d.jpg",
    },
    {
      name: "AWP | Dragon Lore",
      price: "₽15000",
      rarity: "Контрабанда",
      image: "/img/a1947562-a0ec-4435-a3f4-817f22fbdc3d.jpg",
    },
    {
      name: "Glock-18 | Fade",
      price: "₽450",
      rarity: "Засекреченное",
      image: "/img/a1947562-a0ec-4435-a3f4-817f22fbdc3d.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-tactical-dark text-tactical-gray font-roboto">
      {/* Header */}
      <header className="bg-tactical-green border-b-2 border-tactical-orange">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon
                  name="Target"
                  className="text-tactical-orange"
                  size={32}
                />
                <h1 className="text-2xl font-orbitron font-bold text-white">
                  COUNTER-STRIKE 1.6
                </h1>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <a
                href="#servers"
                className="text-white hover:text-tactical-orange transition-colors"
              >
                Серверы
              </a>
              <a
                href="#shop"
                className="text-white hover:text-tactical-orange transition-colors"
              >
                Магазин
              </a>
              <a
                href="#forum"
                className="text-white hover:text-tactical-orange transition-colors"
              >
                Форум
              </a>
              <a
                href="#chat"
                className="text-white hover:text-tactical-orange transition-colors"
              >
                Чат
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tactical-dark via-tactical-green to-tactical-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-orbitron font-bold text-white mb-4">
            ГОТОВ К БОЮ?
          </h2>
          <p className="text-xl text-tactical-gray mb-8">
            Лучшие серверы Counter-Strike 1.6 • Онлайн магазин • Активное
            сообщество
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-tactical-orange hover:bg-tactical-orange/90 text-white px-8 py-3 text-lg">
              <Icon name="Play" className="mr-2" size={20} />
              Играть сейчас
            </Button>
            <Button
              variant="outline"
              className="border-tactical-orange text-tactical-orange hover:bg-tactical-orange hover:text-white px-8 py-3 text-lg"
            >
              <Icon name="Users" className="mr-2" size={20} />
              Сообщество
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="servers" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-tactical-green/20">
            <TabsTrigger
              value="servers"
              className="data-[state=active]:bg-tactical-orange"
            >
              <Icon name="Server" className="mr-2" size={16} />
              Мониторинг серверов
            </TabsTrigger>
            <TabsTrigger
              value="shop"
              className="data-[state=active]:bg-tactical-orange"
            >
              <Icon name="ShoppingCart" className="mr-2" size={16} />
              Магазин
            </TabsTrigger>
            <TabsTrigger
              value="forum"
              className="data-[state=active]:bg-tactical-orange"
            >
              <Icon name="MessageSquare" className="mr-2" size={16} />
              Форум
            </TabsTrigger>
            <TabsTrigger
              value="chat"
              className="data-[state=active]:bg-tactical-orange"
            >
              <Icon name="MessageCircle" className="mr-2" size={16} />
              Чат
            </TabsTrigger>
          </TabsList>

          {/* Servers Tab */}
          <TabsContent value="servers" className="space-y-6">
            <div className="grid gap-4">
              {servers.map((server, index) => (
                <Card
                  key={index}
                  className="bg-tactical-green/10 border-tactical-green/30"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-3 h-3 rounded-full ${server.status === "online" ? "bg-green-500" : "bg-red-500"}`}
                        />
                        <div>
                          <h3 className="font-orbitron font-bold text-white">
                            {server.name}
                          </h3>
                          <p className="text-tactical-gray">{server.map}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-white font-bold">
                            {server.players}
                          </p>
                          <p className="text-tactical-gray text-sm">Игроки</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white font-bold">
                            {server.ping}ms
                          </p>
                          <p className="text-tactical-gray text-sm">Пинг</p>
                        </div>
                        <Button className="bg-tactical-orange hover:bg-tactical-orange/90">
                          <Icon name="Play" className="mr-2" size={16} />
                          Подключиться
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Shop Tab */}
          <TabsContent value="shop" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shopItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-tactical-green/10 border-tactical-green/30 overflow-hidden"
                >
                  <div className="aspect-video bg-tactical-dark/50 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white font-orbitron text-lg">
                      {item.name}
                    </CardTitle>
                    <Badge className="bg-tactical-orange text-white w-fit">
                      {item.rarity}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-tactical-orange">
                        {item.price}
                      </span>
                      <Button className="bg-tactical-orange hover:bg-tactical-orange/90">
                        <Icon name="ShoppingCart" className="mr-2" size={16} />
                        Купить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Forum Tab */}
          <TabsContent value="forum" className="space-y-6">
            <div className="grid gap-4">
              <Card className="bg-tactical-green/10 border-tactical-green/30">
                <CardHeader>
                  <CardTitle className="text-white font-orbitron">
                    🏆 Турниры и соревнования
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-tactical-gray">
                    Обсуждение предстоящих турниров и результатов матчей
                  </p>
                  <div className="mt-4 flex items-center space-x-4">
                    <Badge>156 тем</Badge>
                    <Badge>2.3k сообщений</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-tactical-green/10 border-tactical-green/30">
                <CardHeader>
                  <CardTitle className="text-white font-orbitron">
                    🎯 Стратегии и тактики
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-tactical-gray">
                    Делимся опытом и разбираем игровые моменты
                  </p>
                  <div className="mt-4 flex items-center space-x-4">
                    <Badge>89 тем</Badge>
                    <Badge>1.8k сообщений</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Chat Tab */}
          <TabsContent value="chat" className="space-y-6">
            <Card className="bg-tactical-green/10 border-tactical-green/30">
              <CardHeader>
                <CardTitle className="text-white font-orbitron flex items-center">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Общий чат
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 h-96 overflow-y-auto">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-tactical-orange rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-tactical-orange font-bold">
                        Player_1337
                      </p>
                      <p className="text-tactical-gray">
                        Кто играет на de_dust2? Собираем команду!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-tactical-green rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-tactical-green font-bold">CS_Master</p>
                      <p className="text-tactical-gray">
                        Я готов! Какой уровень игры?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <input
                    type="text"
                    placeholder="Введите сообщение..."
                    className="flex-1 bg-tactical-dark/50 border border-tactical-green/30 text-white px-4 py-2 rounded"
                  />
                  <Button className="bg-tactical-orange hover:bg-tactical-orange/90">
                    <Icon name="Send" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-tactical-green border-t-2 border-tactical-orange mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-orbitron font-bold text-white mb-4">
                COUNTER-STRIKE 1.6
              </h3>
              <p className="text-tactical-gray">
                Лучшее место для игры в классическую Counter-Strike
              </p>
            </div>
            <div>
              <h4 className="font-orbitron font-bold text-white mb-4">
                Быстрые ссылки
              </h4>
              <ul className="space-y-2 text-tactical-gray">
                <li>
                  <a href="#" className="hover:text-tactical-orange">
                    Правила сервера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-tactical-orange">
                    Поддержка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-tactical-orange">
                    Статистика
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-bold text-white mb-4">
                Статистика
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-tactical-gray">Игроков онлайн:</span>
                  <span className="text-tactical-orange font-bold">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tactical-gray">Активных серверов:</span>
                  <span className="text-tactical-orange font-bold">12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
