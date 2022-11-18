import Benefit from "../../models/mongoose/benefit.model";

async function find(name: string) {
  return await Benefit.find({ name });
}

async function create(benefit: any) {
  return await Benefit.create(benefit);
}

async function update(name: string, benefit: any) {
  return await Benefit.updateOne({ name }, benefit);
}

async function remove(name: string) {
  return await Benefit.deleteOne({ name });
}

const benefitRepository = {
  find,
  create,
  update,
  remove,
};

export default benefitRepository;
