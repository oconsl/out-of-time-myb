import { NextResponse } from "next/server";
import axios from "axios";
const URL = process.env.API_URL

export async function GET() {
  try {
    const res = await axios.get(`${URL}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    if (res.status === 200){
      const data = res.data;
      return new NextResponse.json({ data: data });
    } else {
       Error("Error de solicitud");
    }
  } catch (error) {
    return new NextResponse({
      status: 500,
      error: "Error al obtener datos",
    });
  }
}

export async function POST() {
  try {
    const post = {
      Name: "",
      Lastname: "",
      Email: "",
      password: "",
    };

    const res = await axios.post(`${URL}`, post, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 201) {
      const data = res.data;
      return new NextResponse.json({
        data: data,
      });
    } else {
      Error("Error en la solicitud POST");
    }
  } catch (error) {
    return new NextResponse.json({
      status: 500,
      error: "Error al realizar la solicitud POST",
    });
  }
}

export async function DELETE() {
  try {
    const res = await axios.delete(`${URL}`);
    if (res.status === 200) {
      const data = res.data;
      return new NextResponse({
        message: "usuario eliminado",
      });
    } else {
      Error("ocurrio un error al eliminar el usuario");
    }
  } catch (error) {
    return new NextResponse.json({
      status: 500,
      error: "ocurrio un error al intentar eliminar usuario",
    });
  }
}
