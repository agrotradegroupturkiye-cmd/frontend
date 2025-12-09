'use client';
import { useState, useEffect } from 'react';

type Order = {
    id: number;
    client: string;
    service: string;
    price: number;
    urgent: boolean;
    status: 'Новый' | 'В обработке' | 'Выполнен';
    date: string;
    isNew?: boolean;
};

const mockOrders: Order[] = [
    { id: 1, client: 'Иван Иванов', service: 'Уборка квартиры', price: 1500, urgent: false, status: 'Новый', date: '2025-12-08T10:00:00', isNew: true },
    { id: 2, client: 'Мария Петрова', service: 'Мытьё окон', price: 2000, urgent: true, status: 'Новый', date: '2025-12-09T12:00:00', isNew: true },
    { id: 3, client: 'Сергей Смирнов', service: 'Генеральная уборка', price: 3500, urgent: false, status: 'В обработке', date: '2025-12-07T09:00:00' },
];

export default function ProviderDashboard() {
    const [orders, setOrders] = useState<Order[]>(mockOrders);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [filter, setFilter] = useState<'Все' | 'Новый' | 'В обработке' | 'Выполнен' | 'Срочный'>('Все');
    const [sort, setSort] = useState<'dateAsc' | 'dateDesc' | 'priceAsc' | 'priceDesc'>('dateDesc');

    const updateStatus = (id: number, status: Order['status']) => {
        setOrders(orders.map(o => o.id === id ? { ...o, status, isNew: false } : o));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setOrders(prev => prev.map(o => ({ ...o, isNew: false })));
        }, 3000);
        return () => clearTimeout(timer);
    }, [orders]);

    const filteredOrders = orders.filter(o => {
        if (filter === 'Все') return true;
        if (filter === 'Срочный') return o.urgent;
        return o.status === filter;
    });

    const sortedOrders = [...filteredOrders].sort((a, b) => {
        if (sort === 'dateAsc') return new Date(a.date).getTime() - new Date(b.date).getTime();
        if (sort === 'dateDesc') return new Date(b.date).getTime() - new Date(a.date).getTime();
        if (sort === 'priceAsc') return a.price - b.price;
        if (sort === 'priceDesc') return b.price - a.price;
        return 0;
    });

    const formatDateClient = (dateStr: string) => {
        if (typeof window === 'undefined') return dateStr;
        return new Date(dateStr).toLocaleString('ru-RU', { 
            day: '2-digit', month: '2-digit', year: 'numeric', 
            hour: '2-digit', minute: '2-digit' 
        });
    };

    return (
        <div className="p-6 space-y-6 font-sans">
            <h1 className="text-2xl font-semibold">Доска провайдера</h1>

            {/* Фильтры */}
            <div className="flex flex-wrap gap-4">
                {['Все', 'Новый', 'В обработке', 'Выполнен', 'Срочный'].map(f => (
                    <button
                        key={f}
                        className={`px-4 py-2 rounded-2xl text-white font-medium transition duration-300
                            ${f === 'Новый' ? 'bg-blue-500 hover:bg-blue-600' :
                            f === 'В обработке' ? 'bg-yellow-400 hover:bg-yellow-500' :
                            f === 'Выполнен' ? 'bg-green-500 hover:bg-green-600' :
                            f === 'Срочный' ? 'bg-red-500 hover:bg-red-600' :
                            'bg-gray-400 hover:bg-gray-500'}
                            ${filter === f ? 'ring-2 ring-offset-2 ring-indigo-400' : ''}`}
                        onClick={() => setFilter(f as any)}
                    >
                        {f}
                    </button>
                ))}

                <select
                    className="px-4 py-2 border rounded-2xl"
                    value={sort}
                    onChange={e => setSort(e.target.value as any)}
                >
                    <option value="dateDesc">Дата ↓</option>
                    <option value="dateAsc">Дата ↑</option>
                    <option value="priceDesc">Цена ↓</option>
                    <option value="priceAsc">Цена ↑</option>
                </select>
            </div>

            {/* Список заказов с Tailwind-анимацией */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedOrders.map(order => (
                    <div
                        key={order.id}
                        className={`
                            p-4 border shadow cursor-pointer relative
                            rounded-2xl transform transition-all duration-300 ease-out
                            ${order.status === 'Выполнен' ? 'bg-gray-100 border-gray-300 opacity-70' :
                              order.urgent ? 'border-red-500 bg-red-50' :
                              order.status === 'Новый' ? 'border-blue-400 bg-blue-50' :
                              'border-gray-300 bg-white'}
                            ${order.isNew ? 'animate-fadeInDown bg-yellow-100' : ''}
                            hover:shadow-xl hover:-translate-y-1
                        `}
                        onClick={() => setSelectedOrder(order)}
                    >
                        {order.urgent && <span className="absolute top-2 right-2 text-red-600 font-bold text-sm">⚡ Срочно</span>}
                        {order.status === 'Новый' && !order.urgent && <span className="absolute top-2 right-2 text-blue-600 font-semibold text-sm">● Новый</span>}
                        <h2 className="font-semibold text-lg">{order.service}</h2>
                        <p>Клиент: {order.client}</p>
                        <p>Цена: {order.price}₸</p>
                        <p>Статус: <span className="font-medium">{order.status}</span></p>
                        <p>Дата: {formatDateClient(order.date)}</p>
                    </div>
                ))}
            </div>

            {/* Детали заказа */}
            {selectedOrder && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-2xl w-96 space-y-4 transition-all">
                        <h2 className="text-xl font-bold">{selectedOrder.service}</h2>
                        <p>Клиент: {selectedOrder.client}</p>
                        <p>Цена: {selectedOrder.price}₸</p>
                        <p>Статус: {selectedOrder.status}</p>
                        <p>Дата: {formatDateClient(selectedOrder.date)}</p>
                        <p>Срочность: {selectedOrder.urgent ? 'Да' : 'Нет'}</p>
                        <div className="flex justify-between mt-4 space-x-2">
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition"
                                onClick={() => { updateStatus(selectedOrder.id, 'Выполнен'); setSelectedOrder(null); }}
                            >Выполнено</button>
                            <button
                                className="px-4 py-2 bg-yellow-400 text-white rounded-2xl hover:bg-yellow-500 transition"
                                onClick={() => { updateStatus(selectedOrder.id, 'В обработке'); setSelectedOrder(null); }}
                            >В обработке</button>
                            <button
                                className="px-4 py-2 bg-gray-300 text-black rounded-2xl hover:bg-gray-400 transition"
                                onClick={() => setSelectedOrder(null)}
                            >Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
