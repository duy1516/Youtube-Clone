import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
    "Space Exploration",
    "Ancient Civilizations",
    "Cryptography",
    "Street Food",
    "Virtual Reality",
    "Mythical Creatures",
    "Survival Skills",
    "Jazz Music",
    "Unsolved Mysteries",
    "Extreme Sports",
    "Art Deco Architecture",
    "Cybersecurity",
    "Eco-Friendly Innovations",
    "Board Games",
    "Futuristic Transportation",
];

async function main() {
    console.log("Seeding categories...");

    try {
        const value = categoryNames.map((name) => ({
            name,
        }));

        await db.insert(categories).values(value);
        console.log("categories created successfully")

    } catch (error) {
        console.error("Error seeding categories: ", error);
        process.exit(1);
    }
}

main();