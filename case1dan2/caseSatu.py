from dataclasses import dataclass
from typing import Literal, List
from collections import defaultdict

@dataclass
class IFruit:
    fruidId: int
    fruitName: str
    fruitType: Literal['IMPORT', 'LOCAL']
    stock: int


def get_all_fruit_name(fruits: List[IFruit]) -> List[str]:
    return list(set(fruit.fruitName for fruit in fruits))

def group_by_fruit_type(fruits: List[IFruit]) -> dict:
    grouped = defaultdict(list)
    for fruit in fruits:
        grouped[fruit.fruitType].append(fruit.fruitName)
    return grouped

def total_stock_fruit_type(fruits: List[IFruit]) -> dict:
    totals = defaultdict(int)
    for fruit in fruits:
        totals[fruit.fruitType] += fruit.stock
    return totals

def normalize_and_deduplicate_fruits(fruits: List[IFruit]) -> List[IFruit]:
    seen_ids = set()
    seen_names = set()
    unique_fruits = []

    for fruit in fruits:
        normalized_name = fruit.fruitName.strip().lower().capitalize()
        if fruit.fruidId not in seen_ids and normalized_name not in seen_names:
            seen_ids.add(fruit.fruidId)
            seen_names.add(normalized_name)

            unique_fruits.append(
                IFruit(
                    fruidId=fruit.fruidId,
                    fruitName=normalized_name,
                    fruitType=fruit.fruitType,
                    stock=fruit.stock
                )
            )
    return unique_fruits


if __name__ == "__main__":
    fruits = [
        IFruit(1, "Apel", "IMPORT", 10),
        IFruit(2, "Kurma", "IMPORT", 20),
        IFruit(3, "apel", "IMPORT", 50),
        IFruit(4, "Manggis", "LOCAL", 100),
        IFruit(5, "Jeruk Bali", "LOCAL", 10),
        IFruit(5, "KURMA", "IMPORT", 20),
        IFruit(5, "Salak", "LOCAL", 150),
    ]
    fruits = normalize_and_deduplicate_fruits(fruits)
    print("Soal 1: Buah yang dimiliki andi:")
    print(get_all_fruit_name(fruits))
    print("\nSoal 2: Jumlah wadah & isi buah per tipe")
    grouped = group_by_fruit_type(fruits)
    # print(grouped)
    print(f"Jumlah Wadah: {len(grouped)}")
    for tipe, daftar in grouped.items():
        print(f"{tipe}:{daftar}")

    print("\nSoal 3: Total stock buah per tipe: ")
    totals  = total_stock_fruit_type(fruits)
    for tipe, total in totals.items():
        print(f"{tipe}:{total}")


    # Komentar soal 4
    # 1. Terdapat duplikasi fruitId id=5, yang seharusnya unik
    # 2. Nama buah tidak distandarisasi huruf kapital contoh: Apel, apel, KURMA
    # 3. Disarankan menormalkan nama dan memastikan id buah unik


    