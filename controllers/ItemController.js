import items from "../models/Itemsmodel.js";

import { Sequelize } from "sequelize";
const Op =Sequelize.Op;
export const getItems = async (req, res) => {
    const search = req.query.search_query || "";
    try {
      const response = await items.findAll({
          where :{
        item: {
                [Op.like]: '%'+search+'%'
          }
        }
        }
      );
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  };
export const getItemsById = async (req, res) => {
  try {
    const response = await items.findOne({
      where: {
        id:req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createItem = async (req, res) => {
  try {
    await items.create(req.body);
    res.status(201).json({ msg: "Item Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateItem = async (req, res) => {
  try {
    await items.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Item Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteItem = async (req, res) => {
  try {
    await items.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Item Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

